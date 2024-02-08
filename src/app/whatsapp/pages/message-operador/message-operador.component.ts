import { Component, OnInit } from '@angular/core';
import { WhatsappCloudApiService } from '../../services/whatsapp-cloud-api.service';
import { MessageOperador } from '../../interfaces/message-operador';
import { COMPONENT_TYPE, MESSAGING_PRODUCT, PARAMETER_TYPE, TEMPLATE_LANGUAGE, TEMPLATE_NAME, TEMPLATE_TYPE } from '../../../common/api-resource';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-message-operador',
  templateUrl: './message-operador.component.html',
  styleUrl: './message-operador.component.css'
})
export class MessageOperadorComponent implements OnInit {

  nomOperador: string = '';
  numServicio: string = '';
  nomCliente: string = '';

  constructor(private whatsappCloudApiService: WhatsappCloudApiService) { }
 
  ngOnInit(): void {
  }
  send(){
    const data:MessageOperador = {
      messaging_product:MESSAGING_PRODUCT.whatsapp,
      to:environment.toNumber,
      type:TEMPLATE_TYPE.type,
      template: {
        name:TEMPLATE_NAME.messageOperador,
        language: {
          code:TEMPLATE_LANGUAGE.es
        },
        components:[
        {
          type:COMPONENT_TYPE.body,
          parameters:[
            {
              type:PARAMETER_TYPE.text,
              text:this.nomOperador

            },
            {
              type:PARAMETER_TYPE.text,
              text:this.numServicio

            },
            {
              type:PARAMETER_TYPE.text,
              text:this.nomCliente

            }
          ]

        }
        ]
      }

    }

    this.whatsappCloudApiService.sendMessage(data).subscribe(
      resp => {
        this.clearForm();
      },
      error => {
        console.log(error);
      }
    )

  }
  clearForm() {
    this.nomOperador = '';
    this.numServicio = '';
    this.nomCliente = '';
  }



}
