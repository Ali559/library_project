import styled from "styled-components";

export const BoxContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
gap:1em;
`;

export const FormContainer = styled.form`
width:100%;
display:flex;
gap:.625em;
flex-direction:column;
`;


export const MutedLink = styled.a`
font-size:.75rem;
color:rgba(100,100,100,1);
font-weight:500;
text-decoration:none;
`;


export const BoldLink = styled.a`
font-size:.875rem;
color: rgb(2,0,36);
font-weight:800;
text-decoration:none;
`;

export const Input = styled.input`
width:100%;
height:2.625em;
outline:none;
margin-top:1em;
border:.16em solid rgba(200,200,200,.3);
padding: 0 .625em;
border-bottom:.0875em solid transparent;
transition:all .3s ease-in-out 0s;
&:placeholder{
    color:rgba(200,200,200,1);
}

&:not[:last-of-type]{
    border-bottom:.09375em solid rgba(200,200,200,.4);
}

&:focus{
    outline:none;
    border-bottom:.16em solid rgb(2,0,36);
}
`;


export const SubmitButton = styled.button`
width:100%;
padding:.6875em;
color:#fff;
font-size:.9375rem;
font-weight:800;
border:none;
tex-align:center;
border-radius:6.25em;
cursor:pointer;
transition:all .24s ease-in-out;
background: linear-gradient(56deg, rgba(2,0,36,1) -19%, rgba(9,9,121,1) 0%, rgba(9,9,121,1) 99%);


&hover{
    filter:brightness(1.03);
}
&focus{
    filter:brightness(1.03);
}
`;

