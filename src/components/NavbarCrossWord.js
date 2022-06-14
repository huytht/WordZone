import React from "react";
import { Button, IconButton, styled } from "@material-ui/core";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from "react-router-dom";






const Container = styled('div')(
    {
        height: 75,


    }
);

const Wrapper = styled('div')(
    {
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
);

const Left = styled('div')(
    {
        flex: 1,
        display: 'flex'

    }
)




const Center = styled('div')(
    {
        flex: 1,
        display: 'flex',
        marginLeft: "-1100px"
    }
)

const Logo = styled('h1')(
    {
        fontWeight: 'Bold',
        color: 'rgba(86, 141, 229, 1)',
    }
)

const Right = styled('div')(
    {
        flex: 1,
        display: 'flex',

        justifyContent: 'flex-end'
    }
)

const Menu = styled('h2')(
    {

        display: 'flex',
        marginLeft: '40px',
        color:'rgb(62, 112, 112)',
        '&:hover': {
           color: 'rgba(86, 141, 229, 1)',
        }

    }
)

const NavbarCrossWord = () => {

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>
                      WORD ZONE
                    </Logo>

                </Left>
                <Center>
                    <Link 
                    style={{
                        textDecoration: 'none',
                    
                    }} 
                    to="/">
                        <Menu>Main Page</Menu>
                    </Link>
                    <Link 
                     style={{    
                        textDecoration:'none',                        
                    }}
                    to="/play">
                        <Menu>Play</Menu>
                    </Link>
                </Center>

            </Wrapper>
        </Container>
    );

}
export default NavbarCrossWord;