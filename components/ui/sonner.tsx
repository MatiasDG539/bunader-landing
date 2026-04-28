"use client"

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      {...props}
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4 text-white" />,
        info: <InfoIcon className="size-4 text-white" />,
        warning: <TriangleAlertIcon className="size-4 text-white" />,
        error: <OctagonXIcon className="size-4 text-white" />,
        loading: <Loader2Icon className="size-4 animate-spin text-white" />,
      }}
      style={
        {
          "--normal-bg": "#dc2626",
          "--normal-text": "#ffffff",
          "--normal-border": "#dc2626",
          "--success-bg": "#dc2626",
          "--success-text": "#ffffff",
          "--success-border": "#dc2626",
          "--error-bg": "#dc2626",
          "--error-text": "#ffffff",
          "--error-border": "#dc2626",
          "--info-bg": "#dc2626",
          "--info-text": "#ffffff",
          "--info-border": "#dc2626",
          "--warning-bg": "#dc2626",
          "--warning-text": "#ffffff",
          "--warning-border": "#dc2626",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        ...props.toastOptions,
        classNames: {
          toast:
            "min-w-[380px] px-6 py-5 text-base [&_[data-icon]]:scale-125 [&_[data-icon]]:mr-2",
          title: "text-base font-semibold",
          description: "text-sm opacity-95",
          ...props.toastOptions?.classNames,
        },
      }}
    />
  )
}

export { Toaster }
