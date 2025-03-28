import * as React from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
    event.preventDefault();
    alert('You clicked a breadcrumb.');
}

export default function Breadcrum() {
    return (
        <div>
            <div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Create User
                    </Link>
                    <Link 
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        Core
                    </Link>
                    <Link
                        underline="hover"
                        color="text.primary"
                        href="/material-ui/react-breadcrumbs/"
                        aria-current="page"
                    >
                        Breadcrumbs
                    </Link>
                </Breadcrumbs>
            </div>
        </div>

    );
}