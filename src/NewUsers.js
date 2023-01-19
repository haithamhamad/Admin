import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Bars, Nav, NavBtn, NavBtnLink, NavLink, NavMenu} from "./NavbarElements";
import {useEffect, useState} from "react";

export default function NewUsers() {



    const [posts, setPosts] = useState([]);
    const [id,setId]=useState(0)


    useEffect(() => {
        fetch('http://localhost:8083/admin/getAllRequests',{mode:'cors'})
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
    };
    const requestOptions1 = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };


   const accept=()=> {


           fetch(`http://localhost:8083/admin/acceptProvider/${id}`, requestOptions)

   }

    const reject=()=> {


        fetch(`http://localhost:8083/admin/deleteProvider/${id}`, requestOptions1)

    }







    const data = posts.map(info=>{

        return     <Card sx={{ maxWidth: 345 ,height:150,padding:50 }} style={{top:5,padding:5,backgroundColor:"#d3cefc"}}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.userName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {info.qualifications}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" style={{ backgroundColor:"green",color:"white"}} onClick={()=>{accept();setId(info.id)}}>Accept</Button>
                <Button size="small" style={{ backgroundColor:"red",color:"white"}}  onClick={()=>{reject();setId(info.id)}}>Reject</Button>
            </CardActions>
        </Card>

        }
    )







    return (




        <>
            <Nav >
                <Bars />

                <NavMenu>
                    <NavLink to='/Dashboard' activestyle>
                       Notfications
                    </NavLink>
                    <NavLink to='/NewUsers' activestyle>
                       New Users
                    </NavLink>


                   

                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/'>Sign out</NavBtnLink>
                </NavBtn>
            </Nav>


            <div style={{padding:50,position:"relative"}}>
                {data}
            </div>
        </>
    );
}