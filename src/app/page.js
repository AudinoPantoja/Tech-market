import { Box, Button, Container, Stack, Typography } from '@mui/material';

import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
        <Container maxWidth="lg">
            <Box sx={{ my: 4, textAlign: 'center' }}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Tech Market, Una mejor opcion para elegir tus compras
                </Typography>
            </Box>

            <Box sx={{ my: 4, textAlign: 'center' }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Ver el catalogo
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Box sx={{ flex: 1 }}>
                        <Button component={Link} href="/tiendas/Samsung" variant="contained" sx={{ width: '100%', height: '100px', typography: 'h6', backgroundColor: '#E0E00', '&:hover': { backgroundColor: '#AEAEAE' }, borderRadius: 0 }}>
                            Electrodomesticos
                        </Button>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Button component={Link} href="/tiendas/Apple" variant="contained" sx={{ width: '100%', height: '100px', typography: 'h6', backgroundColor: '#E0E0  0', '&:hover': { backgroundColor: '#AEAEAE' }, borderRadius: 0 }}>
                            Equipos de tecnologia
                        </Button>
                    </Box>
                    
                </Stack>
            </Box>
        </Container>
        <Typography variant="h4" component="h2" gutterBottom>
  By
</Typography>
<Typography variant="h4" component="h2" gutterBottom>
  Audino Pantoja
</Typography>
<Typography variant="h4" component="h2" gutterBottom>
  Nenfar Chapid
</Typography>
<Typography variant="h4" component="h2" gutterBottom>
  Isabel Ceron
</Typography>
<Typography variant="h4" component="h2" gutterBottom>
  Carlos Montoya
</Typography>

    </main>
  );
}
