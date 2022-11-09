import React from 'react';
import styled from 'styled-components'

function Avatar({styles}) {
    return (
        <Background 
            background={styles.colors.text}
        >
            <ProfileAvatar 
                src='./description/photo-profil.png' 
            />
        </Background>
    );
}

const Background = styled.div`
    background-color: ${props => props.background};
    height: 7em;
    width: 7em;
    border-radius: 50%;
    display: flex;
    justify-content: center; 
    align-items: center;
`

const ProfileAvatar = styled.img`
    width: 80%;
`

export default Avatar;

