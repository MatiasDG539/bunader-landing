import React from "react";
import ExteriorInvestment from "@/components/exteriorInvestment";

export default function InvertirExteriorPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative h-[400px] md:h-[500px] bg-red-600 mb-10">
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    <div className="container mx-auto max-w-5xl">
                        <div className="relative z-10 h-[400px] md:h-[500px] flex flex-col justify-center items-center text-center text-white px-4">
                            <div className="mt-6 md:mt-0">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-18">Inversión en el Exterior</h1>
                                <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                                    Tu próxima inversión puede estar fuera del país. Nuestra misión es que sea un acierto.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <ExteriorInvestment />
            </main>
        </div>
    )
}

