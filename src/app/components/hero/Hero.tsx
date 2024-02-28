import { Box, Button, Container, Link, Stack, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "./sliderStyle.css";
import IconsSection from './IconsSection';
import { useTranslation } from "react-i18next";
import { t } from 'i18next';



function Hero() {
    const theme = useTheme();
    const { t, i18n } = useTranslation();

    const sliderPages = [
        { text: t("MEN"), link: "/images/banner-15.jpg" },
        { text: t("WOMEN"), link: "/images/banner-25.jpg" },
    ];

    const banners = [
        {
            src: "/images/banner-17.jpg",
            alt: "banner-17",
            captions: [
                { variant: "caption", text: t("NEW ARRIVALS"), fontSize: "18px" },
                { variant: "h6", text: t("SUMMER"), lineHeight: "16px", mt: 1 },
                { variant: "h6", text: t("SALE 20% OFF") },
            ],
            linkHref: "#",
        },
        {
            src: "/images/banner-16.jpg",
            alt: "banner-16",
            captions: [
                { variant: "caption", text: t("GAMING 4K"), fontSize: "18px" },
                { variant: "h6", text: t("DESKTOPS &"), lineHeight: "16px", mt: 1 },
                { variant: "h6", text: t("LAPTOPS") },
            ],
            linkHref: "#",
        },
    ];

    return (
        <Container>
            <Box sx={{ position: 'relative', display: "flex", alignItems: "center", gap: 2, mt: 2.5, pt: 2 }}>
                <Box sx={{ flexGrow: 1, position: 'relative', minWidth: '70%', height: '30rem' }}>

                    <Swiper
                        loop={true}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {
                            sliderPages.map((page) => (
                                <SwiperSlide key={page.link} className='parent-slider'>
                                    <Image src={page.link} alt='banner-16' fill />
                                    <Box
                                        sx={{
                                            [theme.breakpoints.up("sm")]: {
                                                position: "absolute",
                                                left: "10%",
                                                textAlign: i18n.language == "en" ? "left" : " right",
                                            },

                                            [theme.breakpoints.down("sm")]: {
                                                pt: 4,
                                                pb: 6,
                                            },
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: "#222",
                                            }}
                                            variant="h5"
                                        >
                                            {t("LIFESTYLE COLLECTION")}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                color: "#222",
                                                fontWeight: 500,
                                                my: 1,
                                            }}
                                            variant="h4"
                                        >
                                            {page.text}
                                        </Typography>

                                        <Stack
                                            sx={{
                                                justifyContent: { xs: "center", sm: "left" },
                                            }}
                                            direction={"row"}
                                            alignItems={"center"}
                                        >
                                            <Typography color={"#333"} mr={1} variant="h5">
                                                {t("SALE UP TO")}
                                            </Typography>
                                            <Typography color={"#D23F57"} variant="h5">
                                                {t("30% OFF")}
                                            </Typography>
                                        </Stack>

                                        <Typography
                                            sx={{
                                                color: "#000",
                                                my: 1,
                                            }}
                                            variant="body1"
                                        >
                                            {t("Get Free Shipping on orders over $99.00")}
                                        </Typography>

                                        <Button
                                            sx={{
                                                px: 5,
                                                py: 1,
                                                mt: 2,
                                                backgroundColor: "#222",
                                                boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                                                color: "#fff",
                                                borderRadius: "1px",
                                                "&:hover": {
                                                    bgcolor: "#151515",
                                                    boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                                                },
                                            }}
                                            variant="contained"
                                        >
                                            {t("shop now")}
                                        </Button>

                                    </Box>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                </Box>

                <Box sx={{ display: { xs: "none", md: "block", minWidth: "25%" } }}>
                    {banners.map((banner, index) => (
                        <Box
                            key={index}
                            sx={{
                                position: 'relative',
                                width: '100%',
                                minHeight: '14.75rem',
                                mb: 1,
                                ...(index === banners.length - 1 ? { mb: 0 } : {}),
                                textAlign: i18n.language == "en" ? "left" : " right",
                            }}
                        >
                            <Image src={banner.src} alt={banner.alt} fill />
                            <Stack sx={{
                                position: "absolute",
                                top: "50%",
                                transform: "translateY(-50%)",
                                left: 31,
                            }}>
                                {banner.captions.map((caption, captionIndex) => (
                                    <Typography
                                        key={captionIndex}
                                        sx={{
                                            color: "#2B3445",
                                            fontSize: caption.fontSize,
                                            lineHeight: caption.lineHeight,
                                            mt: caption.mt,
                                        }}
                                    >
                                        {caption.text}
                                    </Typography>
                                ))}
                                <Link
                                    sx={{
                                        color: "#2B3445",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "5px",
                                        transition: "0.2s",
                                        "&:hover": {
                                            color: "#D23F57",
                                        },
                                    }}
                                    href={banner.linkHref}
                                    underline="none"
                                >
                                    {t("Shop now")}
                                    <ArrowForwardIcon sx={{ fontSize: "13px" }} />
                                </Link>
                            </Stack>
                        </Box>
                    ))}
                </Box>
            </Box>

            <IconsSection />
        </Container>
    )
}

export default Hero