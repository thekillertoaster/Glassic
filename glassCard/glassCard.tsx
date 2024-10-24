import React from 'react';
import './glassCard.scss';

interface GlassCardProps {
    id?: string,
    className?: string,
    width?: string,
    height?: string,
    outerShadow?: boolean,
    innerShadow?: boolean,
    useRainbow?: boolean,
    children: React.ReactNode
}

const GlassCard: React.FC<GlassCardProps> = ({
                                                 id,
                                                 className,
                                                 width = "auto",
                                                 height = "auto",
                                                 outerShadow = true,
                                                 innerShadow = true,
                                                 useRainbow = false,
                                                 children
                                             }) => {
    return (
        <>
            <div
                className={"glassCard-outer" + (className ? " " + className : "") + (outerShadow ? " shadow" : "") + (useRainbow ? " rainbow" : "")}
                style={{width: `${width}`, height: `${height}`}}
                id={id}
            >
                <div
                    className={"glassCard-inner" + (innerShadow ? " shadow" : "")}
                    style={{width: `${width}`, height: `${height}`}}
                >
                    <svg
                        viewBox="0 0 100% 100%"
                        xmlns='http://www.w3.org/2000/svg'
                        className="noise"
                    >
                        <filter id='noiseFilter'>
                            <feTurbulence
                                type='fractalNoise'
                                baseFrequency='0.85'
                                numOctaves='6'
                                stitchTiles='stitch'/>
                        </filter>

                        <rect
                            width='100%'
                            height='100%'
                            preserveAspectRatio="xMidYMid meet"
                            filter='url(#noiseFilter)'/>
                    </svg>
                    <div className="content">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default GlassCard;