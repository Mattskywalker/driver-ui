import { Accordion, AccordionDetails, AccordionSummary, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';     
import SennaBackground from '../../images/sennaBackground.jpg'
import { Helmet } from 'react-helmet';
import SearchAppBar from '../../components/Toolbar/SearchAppBar';
import instance from '../../utils/axios';

const useStyles = makeStyles((theme) => ({

    listDrivers: {
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
        alignItems: 'center'

    },

    listDriversContainer: {
        backgroundColor: '#fff',
        marginTop: '6%',
        
        padding: '2%',
        borderRadius: '30px',
        width: '80%',
        height: 'content',
        
        display: 'flex',
        
        flexDirection: 'column',
        
        alignItems: 'center',
        
        
    }

}))

export default function Home() {

    const classes = useStyles();
    const [drivers, setDrivers] = React.useState([]);

    useEffect(() => {
        instance.get('/driver/all').then((response) => {
            
            console.log(response);
            setDrivers(response.data);

        }).catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <div className={classes.listDrivers}>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <SearchAppBar></SearchAppBar>
            <div className={classes.container} alt="">
                <div className={classes.listDriversContainer}>
                    <div>
                        <Typography style={{marginTop: '6%'}} variant='h2'> Pilotos cadastrados </Typography>
                    </div>
                    <div style={{marginTop: '4%', width: '80%'}}>
                        {
                            drivers.map((driver) => {

                                return(
                                    <Accordion style={{width: '100%'}}>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                        <Typography className={classes.heading}>{driver.nome} {driver.sobrenome}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails >
                                        <Typography>
                                            Idade: {driver.idade}   Numero: {driver.numero}   Equipe: {driver.equipe}   Nacionalidade: {driver.nacionalidade}
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                ) 
                            })
                        }
                    </div>
                </div>
                
            </div> 
            
        
        </div>
    )
}
