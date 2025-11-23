import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function Stars(props: any) {
    const ref = useRef<any>();
    const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }), []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#ffa500"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-background flex items-center justify-center">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <Stars />
                </Canvas>
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background z-0 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="inline-block mb-4 px-6 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
                        <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
                            The Renaissance Awaits
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-playfair font-bold mb-6 tracking-tight">
                        <span className="block text-foreground mix-blend-difference">VIZPHORIA</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-primary bg-[length:200%_auto] animate-shimmer">
                            2025
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                        Experience the rebirth of art, culture, and innovation.
                        A three-day spectacle of creativity and competition.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link to="/register">
                            <Button
                                size="lg"
                                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full group relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2 font-semibold">
                                    Register Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </Button>
                        </Link>

                        <Link to="/events">
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-primary/50 text-primary hover:bg-primary/10 text-lg px-8 py-6 rounded-full backdrop-blur-sm"
                            >
                                <span className="flex items-center gap-2">
                                    <Sparkles className="w-5 h-5" /> Explore Events
                                </span>
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
