import { makeStyles } from '@material-ui/core'
import React from 'react'
import HomeForm from './components/HomeForm/HomeForm';
import SennaBackground from '../../images/sennaBackground.jpg'
import { Helmet } from 'react-helmet';
import SearchAppBar from '../../components/Toolbar/SearchAppBar';

const useStyles = makeStyles((theme) => ({

    home: {
        backgroundColor: 'black',
        width: '100vw',
        height: '100vh',
        verticalAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'    
        
      },

    container: {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${SennaBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    }

}))

export default function Home() {

    const classes = useStyles();

    return (
        <div className={classes.home}>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <SearchAppBar></SearchAppBar>
            <div className={classes.container} alt="">
                <div style={{marginTop: '8%'}}>
                    <HomeForm ></HomeForm>
                </div>
            </div> 
            
        
        </div>
    )
}