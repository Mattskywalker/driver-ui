import { Button, makeStyles, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { useEffect } from 'react';
import navigate from '../../../../utils/navigate';

import { validate } from 'validate.js';
import instance from '../../../../utils/axios';

const useStyles = makeStyles((theme) => ({

    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    form: {
        backgroundColor: "#fff",
        borderRadius: '30px',
        padding: '30px'
    },
    input: {
        margin: '10px'
    }

  }));

const schema = {
    nome: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    sobrenome: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    numero: {
        presence: { allowEmpty: false, message: 'is required' }
    },
    nacionalidade: {
        presence: { allowEmpty: false, message: 'is required' }
    },
    idade: {
        presence: { allowEmpty: false, message: 'is required' }
    },
    equipe: {
        presence: { allowEmpty: false, message: 'is required' }
    }
};
    
export default function HomeForm({setValues}) {
    const classes = useStyles();
    


    const [formState, setFormState] = React.useState({
        values: {
            nome: '',
            sobrenome: '',
            numero: '',
            nacionalidade: '',
            idade: '',
            equipe: ''
        },
        touched:{

        },
        errors: {},
        isValid: false,
    })
  
    const handleChange = (prop) => (event) => {//salvar valores do formulario
      setFormState(formState => ({
          ...formState,
          values:{
              ...formState.values,
              [prop]: event.target.value,
          },
          touched: {
              ...formState.touched,
              [prop]: true,
          }
      }))
    };


    const handleTouch = (prop) => {
        setFormState(formState => ({
            ...formState,
            touched: {
                ...formState.touched,
                [prop]: true,
            }
        }))
    }

    const hasError = (field) => 
        formState.touched[field] && formState.errors[field]? true: false;

    useEffect(()=> {
        const errors = validate(formState.values, schema);
        setFormState(formState => (
            {
                ...formState,
                errors: errors || {},
                isValid: !errors,
            }
        ));
    },[formState.values])

    const handleSubmit = async event => {
        event.preventDefault();
        // // dispatch(login());
        await instance.post('/driver',formState.values).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
        
        
        navigate('/');
    };

    return (
        <div>
            
            <form className={classes.form} onSubmit={(event) => handleSubmit(event)} style={{ marginTop:'14%'}}>
                <Typography style={{ display: 'flex', justifyContent: 'center' }} variant='h4'>Cadastrar Piloto</Typography>
                <div>
                    <TextField onBlur={() => handleTouch('nome')} error={hasError('nome')} onChange={ handleChange('nome') }  className={classes.input} label="Nome" />
                    <TextField onBlur={() => handleTouch('sobrenome')} error={hasError('sobrenome')} onChange={ handleChange('sobrenome')} className={classes.input} label="Sobrenome" />
                </div>
                <div>    
                    <TextField onBlur={() => handleTouch('numero')} error={hasError('numero')} onChange={ handleChange('numero')} className={classes.input} label="Numero" />
                    <TextField onBlur={() => handleTouch('equipe')} error={hasError('equipe')} onChange={ handleChange('equipe')} className={classes.input} label="Equipe" />
                </div>
                <TextField onBlur={() => handleTouch('idade')} error={hasError('idade')} onChange={ handleChange('idade')} className={classes.input} label="Idade"/>
                <TextField onBlur={() => handleTouch('nacionalidade')} error={hasError('nacionalidade')} onChange={ handleChange('nacionalidade')} className={classes.input} label="Nacionalidade" />
                
                <div>
                    <Button disabled={!formState.isValid} type='submit' style={{margin: '10px'}} variant="contained">Salvar</Button>
                </div>
                   
            </form>

        </div>
    )
}
