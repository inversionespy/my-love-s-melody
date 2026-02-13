import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";

interface IdentityCheckProps {
    onVerified: () => void;
}

const IdentityCheck = ({ onVerified }: IdentityCheckProps) => {
    const [identity, setIdentity] = useState("");
    const [error, setError] = useState("");

    const correctId = "27313046";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (identity.trim() === correctId) {
            onVerified();
        } else {
            setError("Este regalo no es para ti");
            setIdentity("");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-pink-50 to-rose-100 p-4 animate-in fade-in duration-1000">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2070')] bg-cover bg-center opacity-10 pointer-events-none" />

            <Card className="w-full max-w-md border-rose-200 shadow-xl bg-white/90 backdrop-blur-sm relative overflow-hidden animate-in zoom-in-95 duration-500 delay-150">
                <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-rose-300 via-pink-500 to-rose-300" />

                <CardHeader className="text-center space-y-4 pt-10">
                    <div className="mx-auto bg-rose-100 p-3 rounded-full w-fit animate-bounce shadow-sm">
                        <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
                    </div>
                    <CardTitle className="font-display text-3xl text-rose-900 tracking-wide">
                        Hola!
                    </CardTitle>
                    <CardDescription className="font-body text-rose-700/80 text-lg">
                        Por favor, ingresa tu cédula para continuar
                    </CardDescription>
                </CardHeader>

                <CardContent className="pb-10 px-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Input
                                type="text"
                                placeholder="Cédula de identidad"
                                value={identity}
                                onChange={(e) => {
                                    setIdentity(e.target.value);
                                    if (error) setError("");
                                }}
                                className="text-center text-lg border-rose-200 focus-visible:ring-rose-400 h-12 bg-white/50 font-medium tracking-widest placeholder:tracking-normal placeholder:font-normal"
                                autoFocus
                            />
                            {error && (
                                <p className="text-sm text-red-500 text-center font-medium animate-in slide-in-from-top-1">
                                    {error} ❄️
                                </p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-12 bg-rose-500 hover:bg-rose-600 text-white font-medium text-lg shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            Verificar
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default IdentityCheck;
