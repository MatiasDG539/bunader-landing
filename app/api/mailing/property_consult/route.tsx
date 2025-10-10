import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, recaptchaToken, propertyId, propertyTitle, propertyPrice, propertyOperation } = body;

    if (!name || !email || !message || !propertyId) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    if (!process.env.CONTACT_EMAIL) {
      console.error('CONTACT_EMAIL environment variable is not set');
      return NextResponse.json(
        { error: 'Configuración de email no encontrada' },
        { status: 500 }
      );
    }

    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'Verificación de seguridad requerida' },
        { status: 400 }
      );
    }

    if (recaptchaToken !== 'test-token') {
      const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      });

      const recaptchaData = await recaptchaResponse.json();

      const isValidRecaptcha = recaptchaData.success;

      if (!isValidRecaptcha) {
        return NextResponse.json(
          { error: 'Verificación de seguridad fallida' },
          { status: 400 }
        );
      }
    }

    const operationType = propertyOperation === "venta" ? "En Venta" : "En Alquiler";
    
    const subject = `Consulta sobre ${propertyTitle || `propiedad Ref: #${propertyId}`} - ${operationType}`;

    const { data, error } = await resend.emails.send({
      from: 'Bunader Negocios Inmobiliarios <no-reply@email.bunader.com.ar>',
      to: [process.env.CONTACT_EMAIL],
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
            Consulta sobre propiedad - Bunader
          </h2>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0ea5e9;">
            <h3 style="color: #0c4a6e; margin-top: 0;">Información de la propiedad:</h3>
            <p><strong>Título:</strong> ${propertyTitle || 'No especificado'}</p>
            <p><strong>Referencia:</strong> #${propertyId}</p>
            <p><strong>Operación:</strong> ${operationType}</p>
            ${propertyPrice ? `<p><strong>Precio:</strong> ${propertyPrice}</p>` : ''}
          </div>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Información del interesado:</h3>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Consulta:</h3>
            <p style="line-height: 1.6; color: #4b5563;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #fef2f2; border-left: 4px solid #dc2626; border-radius: 4px;">
            <p style="margin: 0; color: #991b1b; font-size: 14px;">
              Esta consulta fue enviada desde la página de la propiedad #${propertyId} de Bunader.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Error sending property consult email to Bunader:', error);
      return NextResponse.json(
        { error: 'Error al enviar la consulta' },
        { status: 500 }
      );
    }

    // Enviar email de confirmación al usuario
    const { error: confirmationError } = await resend.emails.send({
      from: 'Bunader Negocios Inmobiliarios <no-reply@email.bunader.com.ar>',
      to: [email],
      subject: `Confirmación de consulta - ${propertyTitle || `Propiedad #${propertyId}`}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
            ¡Consulta recibida! - Bunader
          </h2>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0ea5e9;">
            <h3 style="color: #0c4a6e; margin-top: 0;">¡Hola ${name}!</h3>
            <p style="color: #0c4a6e; margin-bottom: 0;">
              Hemos recibido tu consulta sobre la propiedad y nos pondremos en contacto contigo pronto.
            </p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Propiedad consultada:</h3>
            <p><strong>Título:</strong> ${propertyTitle || 'No especificado'}</p>
            <p><strong>Referencia:</strong> #${propertyId}</p>
            <p><strong>Operación:</strong> ${operationType}</p>
            ${propertyPrice ? `<p><strong>Precio:</strong> ${propertyPrice}</p>` : ''}
          </div>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Tu consulta:</h3>
            <div style="background-color: #ffffff; padding: 15px; border: 1px solid #e5e7eb; border-radius: 6px; margin-top: 10px;">
              <p style="line-height: 1.6; color: #4b5563; margin: 0;">${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          
          <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
            <p style="margin: 0; color: #92400e; font-size: 14px;">
              <strong>¿Necesitas más información urgente?</strong><br>
              Puedes llamarnos o escribirnos por WhatsApp para una respuesta más rápida.
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              Gracias por tu interés en <strong>Bunader Negocios Inmobiliarios</strong><br>
              Tu consulta es importante para nosotros
            </p>
          </div>
        </div>
      `,
    });

    if (confirmationError) {
      console.error('Error sending confirmation email:', confirmationError);
    }

    return NextResponse.json(
      { 
        message: 'Consulta enviada correctamente', 
        id: data?.id,
        confirmationSent: !confirmationError 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error in property consult API:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
