import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import SelectBox from './SelectBox';


function NewRequest() {

    return (
        <div class="modal" id="newRequestModal" tabindex="-1" >
            <div class="modal-dialog modal-dialog-scrollable modal-lg">
                <div class="modal-content gap-5" style={{padding: "0.5rem"}}>
                    <div class="modal-header text-white" style={{backgroundColor: "green"}}>
                        
                        <h5 class="modal-title">Nueva Solicitud</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    
                    <div class="container row">
                        <div class="col">
                            <SelectBox label="Tipo" options={["uno", "dos"]} ></SelectBox>
                        </div>
                        <div class="col">
                            <SelectBox label="Estado" options={["uno", "dos"]} ></SelectBox>
                        </div>
                        <div class="col">
                            <SelectBox label="Prioridad" options={["uno", "dos"]} ></SelectBox>
                        </div>
                    </div>
                    <div class="container col">
                        <div class="input-group mb-3">

                            <input type="file" class="form-control" id="inputGroupFile01"></input>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Asunto</span>
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                        <div class="input-group">
                            <span class="input-group-text">With textarea</span>
                            <textarea class="form-control" aria-label="With textarea"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default NewRequest

