
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine, Container } from "tsparticles-engine";
import { useCallback, type ReactNode } from "react";

export default function Background({ children }: { children: ReactNode }) {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (_?: Container) => { }, []);

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-zinc-200 selection:bg-zinc-700/50">
            {/* background particles layer */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                className="pointer-events-none absolute inset-0 z-0"
                options={{
                    background: { color: { value: "transparent" } },
                    fpsLimit: 60,
                    detectRetina: true,
                    fullScreen: { enable: false },
                    particles: {
                        number: { value: 55, density: { enable: true, area: 900 } },
                        color: { value: ["#999999", "#777777", "#888888"] },
                        opacity: { value: 1 },
                        size: { value: { min: 1, max: 2.2 } },
                        links: { enable: true, color: "#8a8a8a", opacity: 0.2, distance: 120, width: 1 },
                        move: { enable: true, speed: 0.4, outModes: { default: "out" } },
                    },
                    interactivity: {
                        events: { onHover: { enable: true, mode: "repulse" }, resize: true },
                        modes: { repulse: { distance: 80, duration: 0.2 } },
                    },
                }}
            />

            {/* your page content goes above particles */}
            <div className="relative z-10">{children}</div>
        </div>
    );
}
