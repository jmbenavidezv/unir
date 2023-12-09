import React from 'react';
import { BrowserRouter, Routes, Route , useParams} from 'react-router-dom';

// Components
import FormRegister from './FormRegister';
import MenuLibrary from './MenuLibrary';
import Books from './Books';
import FormDetails from './FormDetails';
import FormUpdate from './FormUpdate';
import RequestBook from './RequestBook';


const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <MenuLibrary />
                <Routes>
                    <Route path='/' element={<Books />} />
                    <Route path='/FormRegister' element={<FormRegister />} />
                    <Route path='/FormDetails/:id' element={<DetailsBook />} />
                    <Route path='/FormUpdate/:id' element={<UpdateBook />} />
                    <Route path='/RequestBook' element={<RequestBook />}/>
                    
                </Routes>
            </BrowserRouter>
        </div>
    );
};

// Componentes que reciben parámetro de ID para consultar detalle y actualizar
const DetailsBook = () => {
    const { id } = useParams();
    return <FormDetails id={id} />;
};

const UpdateBook = () => {
    const { id } = useParams();
    return <FormUpdate id={id} />;
};

export default Router;
