import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();
    return (
        <Box
            sx={{
                bgcolor: "#2B3445",
                py: 1.3,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
            }}
        >
            <Typography
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
                color={"White"}
                variant="h6"
                sx={{ fontSize: 18 }}
            >
                {t("Developed by")}
                <Button
                    sx={{
                        mx: 0.5,
                        fontSize: "18px",
                        textTransform: "capitalize",
                        color: "#ff7790",
                    }}
                    variant="text"
                    color="primary"
                >
                    {t("Mohamed Alaa")}
                </Button>
                ©{t("2024")}
            </Typography>
        </Box>
    )
}

export default Footer
