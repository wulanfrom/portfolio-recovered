import locomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import 'locomotive-scroll/src/locomotive-scroll.scss'

export default function useLocoScroll(start) {
    useEffect(() => {
        if (!start) return;

        const scrollEl = document.querySelector('#portfolio-container');

        const locoScroll = new locomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            class: 'is-reveal',
        })
    }, [start])
}