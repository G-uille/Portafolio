import React from "react";
import { WorkOutline } from '@mui/icons-material/';
import Job from "./Job";

const WorkExperience = () => {
    return (
        <div className="container-work-experience">
            <h1 className='title__h1'> <WorkOutline sx={{ marginRight: '10px' }} /> Experiencia Laboral</h1>
            
            <Job
                title='Desarrollador de TI ( Desarrollador Jr. Front End)'
                duration='nov. 2023 - actualidad · 9 meses'
                company="La Plata Empeños"
                description='Responsable del desarrollo y mantenimiento de interfaces de usuario para aplicaciones web utilizando la tecnología React.js. Principal diseñador UX/UI, implementando diseños visualmente atractivos y funcionales. Coordinación con equipos de back end para integrar API RESTful y asegurar una comunicación eficiente entre cliente y servidor. Mantenimiento y actualización de la documentación técnica del proyecto.
                '/>

  
            <Job
                title='Auxiliar de Marketing Digital y Comunicaciones'
                duration='oct. 2022 - oct. 2023 · 1 año 1 mes'
                company="Cooperativa Multiactiva Luque Ltda."
                description='Encargado del diseño de materiales gráficos para publicaciones en diversas plataformas de redes sociales, incluyendo Facebook, Instagram, Twitter y TikTok. Gestión integral de las cuentas en estas redes sociales, e implementación y seguimiento de espacios en medios tradicionales como entrevistas en televisión, radio, y diarios impresos y digitales.'/>
      </div>
    )
};

export default WorkExperience;