import { useTheme } from "@emotion/react";
import { Facebook, GitHub, Instagram, Twitter, WhatsApp } from "@mui/icons-material";
import {
  Box,
  Typography,
  Container,
  Grid,
  Link,
  IconButton,
} from "@mui/material";
const Footer = () => {
  const theme = useTheme();
  const backgroundColor =
    theme.palette.mode === "dark"
      ? theme.palette.grey[900]
      : theme.palette.grey[300];
  console.log(theme.palette);
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: backgroundColor,
        color: theme.palette.text.primary,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4} lg={3}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Typography variant="body2">
              We are a leading company in the industry, providing the best
              services.
            </Typography>
          </Grid>

          <Grid item xs={4} sm={4} lg={3}>
            <Typography variant="h6" gutterBottom>
              Useful Links
            </Typography>
            <Link href="#" variant="body2" display="block" gutterBottom>
              Home
            </Link>
            <Link href="#" variant="body2" display="block" gutterBottom>
              About Us
            </Link>
            <Link href="#" variant="body2" display="block" gutterBottom>
              Services
            </Link>
            <Link href="#" variant="body2" display="block" gutterBottom>
              Contact Us
            </Link>
          </Grid>

          <Grid item xs={4} sm={4} lg={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" display="block">
              Email: contact@company.com
            </Typography>
            <Typography variant="body2" display="block">
              Phone: +123 456 7890
            </Typography>
            <Typography variant="body2" display="block">
              Address: 123 Main St, City, Country
            </Typography>
          </Grid>
          <Grid item xs={4} sm={4} lg={3}>
            <Typography variant="h6" gutterBottom>
              Connect With Social Media
            </Typography>
            <IconButton>
              <GitHub></GitHub>
            </IconButton>
            <IconButton>
              <Facebook></Facebook>
            </IconButton>
            <IconButton>
              <Instagram></Instagram>
            </IconButton>
            <IconButton>
              <Twitter></Twitter>
            </IconButton>
            <IconButton>
              <WhatsApp></WhatsApp>
            </IconButton>
          </Grid>
        </Grid>
      </Container>

      <Box textAlign="center" pt={5} pb={2}>
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
