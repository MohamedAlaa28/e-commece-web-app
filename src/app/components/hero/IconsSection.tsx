import { Box, Container, Divider, Stack, Typography, useMediaQuery } from "@mui/material"
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import { useTheme } from "@emotion/react";
import { t } from "i18next";


const IconsSection = () => {
    const theme = useTheme();

    const desktop = useMediaQuery("(min-width:600px)");

    const icons = [
        { title: t("Fast Delivery"), subTitle: t("Start from $10"), icon: < ElectricBoltIcon /> },
        { title: t("Money Guarantee"), subTitle: t("7 Days Back"), icon: <WorkspacePremiumOutlinedIcon /> },
        { title: t("365 Days"), subTitle: t("For free return"), icon: <AccessAlarmOutlinedIcon /> },
        { title: t("Payment"), subTitle: t("Secure system"), icon: <CreditScoreOutlinedIcon /> },
    ];

    return (
        <Container sx={{
            mt: 3,
            // @ts-ignore
            bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff"
        }}>
            <Stack
                divider={
                    desktop && (
                        <Divider orientation="vertical" flexItem />
                    )
                }
                direction={"row"} alignItems={"center"} flexWrap={"wrap"}
            >

                {icons.map((item, index) => (
                    <Box key={index} sx={{
                        width: 250,
                        py: 1.6,
                        display: "flex",
                        flexGrow: 1,
                        gap: 3,
                        alignItems: "center",
                        justifyContent: desktop ? "center" : "left",
                    }}>
                        {item.icon}
                        <Box>
                            <Typography variant="body1">
                                {item.title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: 300,
                                    // @ts-ignore
                                    color: theme.palette.text.secondary
                                }}
                                variant="body2"
                            >
                                {item.subTitle}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Stack>
        </Container>
    )
}

export default IconsSection