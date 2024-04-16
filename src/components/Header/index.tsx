import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Header() {
    return (
        <Box
            sx={{ flexGrow: 1 }}
        >
            <AppBar position="fixed" >
                <Typography variant="h6" color="inherit" component="div">
                    Sign up and get 20% off to your first order.
                    <Link href="signup" color="inherit" underline="always">
                        Sign Up Now
                    </Link>
                </Typography>
            </AppBar>
        </Box>
    );
}