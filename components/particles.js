import Particles from "react-tsparticles";
import React, { useCallback } from "react";
import { loadFull } from "tsparticles";

const ParticleBackground = ({ isDarkMode }) => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const backgroundColor = isDarkMode ? "#1a202c" : "#ffffff";
    const particleColor = isDarkMode? "#ffffff" : "#1a202c";

    return (
        <div className="particle">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fpsLimit: 120,
                    fullScreen: {
                        enable: true,
                    },
                    background: {
                        color: {
                          value: backgroundColor
                        },
                        zIndex: -1,
                    },
                    particles: {
                    color: {
                        value: particleColor
                    },
                    number: {
                        density: {
                        enable: true,
                        area: 800
                        },
                        value: 80
                    },
                    opacity: {
                        value: 0.5,
                        anim: {
                            enable: true,
                            speed: 0.5,
                            opacity_min: 0,
                            sync: false
                        }
                    },
                    shape: {
                        type: "square"
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                    move: {
                        enable: true,
                        speed: 0.2,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                          enable: false,
                          rotateX: 600,
                          rotateY: 1200
                        }
                    },
                    detectRetina: true
                }}}
            />
        </div>
    );
};

export { ParticleBackground };
