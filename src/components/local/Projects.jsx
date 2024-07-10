import React from 'react';
import { Code } from '@mui/icons-material/';
import Project from './Project';
import notebookImg from '../../assets/images/projectTwo.png';
import cellImg from '../../assets/images/projectOne.png';
import { DiReact, DiPhotoshop, DiJavascript  } from "react-icons/di";
import { SiCoreldraw } from "react-icons/si";

const Projects = () => {
    return (
        <div className='container-projects'>
            <h1 className='title__h1'> <Code sx={{ marginRight: '10px' }} /> Proyectos</h1>
            <div className='container-project__lpchat--title'>
                <h1 className='project__lpchat--title'>DISEÑO UX/UI</h1>
            </div>

            <Project
                src={notebookImg}
                image="lpchat"
                name='LPChat'
                secondName='CRM (Customer Relationship Management)'
                description='Diseño completo UX/UI y desarrollo Web de un CRM.
            Administra +100 clientes por día en una sola plataforma, y permite un seguimiento detallado y personalizado del historial de consultas
            del usuario.'
            icon1={<SiCoreldraw className='icon-corel' />}
            icon2={<DiPhotoshop className='icon-photoshop'/>}
            icon3={<DiJavascript className='icon-javascript' />}
            icon4={<DiReact className='icon-react'/>}/>
            <Project
                src={cellImg}
                name='BillPy'
                secondName='Software de Control de Facturas'
                description='Diseño completo UX/UI y desarrollo Web de un Sofware de control de facturas. Permite el seguimiento detallado del historial de facturaciones y un proceso sencillo para agregar nuevas facturas. '
                icon1={<SiCoreldraw className='icon-corel' />}
                icon2={<DiPhotoshop className='icon-photoshop'/>}
                icon3={<DiJavascript className='icon-javascript' />}
                icon4={<DiReact className='icon-react'/>} />
        </div>
    )
};

export default Projects;