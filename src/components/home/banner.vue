<template>
    <router-link to="/tournament/alpine-rivals-2" id="banner">
        <img
            alt="Alpine Rivals #2"
            loading="lazy"
            src="@/assets/img/carousel/valo_banner.webp"
        />
    </router-link>
</template>

<script>
export default {
    name: "bannerComponent",
};
</script>

<style lang="scss" scoped>
@import "node_modules/compass-mixins/lib/compass/css3";

#banner {
    max-height: 700px;
    min-height: 450px;
    display: flex;
    align-content: center;
    justify-content: center;
    position: relative;

    &::after {
        z-index: -1;
        @include box-shadow(
            inset 0 120px 200px 0 var(--bg-color),
            inset 0 -100px 50px -40px var(--bg-color)
        );
        bottom: 0;
        content: "";
        height: calc(100% + 2px);
        left: 0;
        position: absolute;
        right: 0;
        top: -1px;
    }

    > img {
        z-index: -1;
        max-width: 100%;
        max-height: 100%;
    }

    > article {
        width: 65%;
        min-width: 500px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media screen and (max-width: 680px) {
            min-width: unset;
            width: 100%;
            justify-content: center;
        }

        > section {
            z-index: 2;
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-start;
            gap: 4px;

            @media screen and (max-width: 680px) {
                align-items: center;
                text-align: center;
            }

            &:first-of-type {
                position: relative;

                @media screen and (min-width: 681px) {
                    &::before {
                        background: rgb(38, 38, 38);
                        background: radial-gradient(
                            circle,
                            rgba(38, 38, 38, 1) 0%,
                            rgba(252, 70, 107, 0) 60%
                        );
                        content: "";
                        height: calc(100% + 300px);
                        left: -150px;
                        position: absolute;
                        top: -150px;
                        width: calc(100% + 300px);
                        z-index: -1;
                    }
                }

                p {
                    font-family: var(--title-font);
                    font-size: clamp(25px, 3vw, 57px);
                    font-weight: bold;
                    position: relative;
                    text-shadow: 0 0 16px rgba(0, 0, 0, 0.8);
                    text-transform: uppercase;
                }

                a {
                    margin: 20px 0 0;
                    padding: 8px 30px;
                    width: max-content;

                    svg {
                        margin-left: 10px;
                    }
                }
            }

            &:last-of-type {
                aspect-ratio: 1/1;
                width: 30%;
                min-width: 200px;
                max-width: 360px;
                border-radius: 8px;
                overflow: hidden;

                @media screen and (max-width: 680px) {
                    display: none;
                }

                video {
                    height: 100%;
                    object-fit: cover;
                    width: 100%;
                }
            }
        }
    }

    /* > article {
        height: 100%;
        margin-inline: auto;
        position: relative;
        width: min(100% - 2rem, 1350px);

        section {
            bottom: 22%;
            display: flex;
            flex-flow: column nowrap;
            gap: 4px;
            left: 0;
            position: absolute;
            z-index: 2;

            &:last-of-type {
                aspect-ratio: 1/1;
                border-radius: 8px;
                left: unset;
                overflow: hidden;
                position: absolute;
                right: 0;
                top: 26%;

                @media screen and (max-width: 680px) {
                    display: none;
                }

                video {
                    height: 100%;
                    object-fit: cover;
                    width: 100%;
                }
            }

            &:first-of-type {
                &::before {
                    background: rgb(38, 38, 38);
                    background: radial-gradient(
                        circle,
                        rgba(38, 38, 38, 1) 0%,
                        rgba(252, 70, 107, 0) 60%
                    );
                    content: "";
                    height: calc(100% + 300px);
                    left: -150px;
                    position: absolute;
                    top: -150px;
                    width: calc(100% + 300px);
                    z-index: -1;
                }

                & > p:first-of-type {
                    color: var(--subtext-color);
                    font-size: 1.4em;
                    text-shadow: 0 0 8px rgb(0, 0, 0);
                }

                & > p:last-of-type {
                    font-family: var(--title-font);
                    font-size: 3.6em;
                    font-weight: bold;
                    position: relative;
                    text-shadow: 0 0 16px rgba(0, 0, 0, 0.8);
                    text-transform: uppercase;
                }

                a {
                    margin: 20px 0 0;
                    padding: 8px 30px;
                    width: max-content;

                    svg {
                        margin-left: 10px;
                    }
                }

                .CEC {
                    text-align: left !important;

                    span {
                        font-size: 2.8em;
                        line-height: 0;
                        position: absolute;
                        right: 0;
                        transform: rotate(8deg);
                    }
                }

                #CEC4 {
                    span:first-of-type {
                        right: 0;
                    }

                    span:last-of-type {
                        font-size: 0.6em;
                        right: -50px;
                        top: 0;

                        &:before {
                            background-color: var(--bg-color);
                            border: 2px solid var(--special-color);
                            border-radius: 8px;
                            box-shadow: rgba(0, 0, 0, 0.4) 0 8px 24px 0;
                            content: "";
                            height: 46px;
                            left: -11px;
                            position: absolute;
                            top: -25px;
                            width: 160px;
                            z-index: -1;

                            @media only screen and (max-width: 1300px) {
                                height: 40px;
                                top: -22px;
                                width: 136px;
                            }
                        }

                        @media only screen and (max-width: 450px) {
                            display: none;
                        }
                    }
                }

                @media only screen and (max-width: 1300px) {
                    bottom: 16%;

                    & > p:first-of-type {
                        color: var(--subtext-color);
                        font-size: 1.2em;
                        text-shadow: 0 0 8px rgb(0, 0, 0);
                    }

                    & > p:last-of-type {
                        font-family: var(--title-font);
                        font-size: 3em;
                        font-weight: bold;
                        position: relative;
                        text-shadow: 0 0 16px rgba(0, 0, 0, 0.8);
                        text-transform: uppercase;
                    }
                }

                @media only screen and (max-width: 450px) {
                    align-items: center;
                    height: calc(100% - 170px);
                    justify-content: center;
                    padding: 0 16px;
                    text-align: center;
                    width: 100%;

                    & > p:first-of-type {
                        color: var(--subtext-color);
                        font-size: 1.1em;
                        text-shadow: 0 0 8px rgb(0, 0, 0);
                    }

                    & > p:last-of-type {
                        font-family: var(--title-font);
                        font-size: 2.4em;
                        font-weight: bold;
                        position: relative;
                        text-shadow: 0 0 16px rgba(0, 0, 0, 0.8);
                        text-transform: uppercase;
                    }
                }
            }
        }

        img {
            bottom: 0;
            height: 80%;
            position: absolute;
            right: -16px;
            transform: rotate(12deg);
        }
    } */
}
</style>
