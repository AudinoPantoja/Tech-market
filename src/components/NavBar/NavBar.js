'use client';

import Search from "@/components/Search";
import firebase_app from "@/firebase/config";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from "react";

export default function NavBar() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth(firebase_app);
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        });
    }, []);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box component={Link} href="/" sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <Image
                            src="/logo tienda.JPEG"
                            alt="Tienda Putumayo"
                            width={50}
                            height={50}
                            priority
                        />
                        <Typography variant="h6" component="h1" sx={{ ml: 1, display: { xs: 'none', sm: 'block' } }}>
                            Tienda Virtual Tech Market
                        </Typography>
                    </Box>
                    <Search />
                    <Box sx={{ ml: 2 }}>
                        {user ? (
                            <Link href="#" onClick={() => {
                                const auth = getAuth(firebase_app);
                                signOut(auth);
                            }}>
                                <Typography>
                                    Cerrar sesión
                                </Typography>
                            </Link>
                        ) : (
                            <Link href="/signin">
                                <Typography>
                                    Iniciar sesión
                                </Typography>
                            </Link>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
