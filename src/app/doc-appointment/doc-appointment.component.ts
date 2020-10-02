import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-doc-appointment',
  templateUrl: './doc-appointment.component.html',
  styleUrls: ['./doc-appointment.component.scss']
})
export class DocAppointmentComponent implements OnInit {
  avengers = []; 

  ngOnInit() { 
  
  this.avengers = 
  [{ id: 1, naming: 'Banu Arun', stat:'Founder and Co-Medical Director, Clinical Cancer Genetics Program',hosp:'MD Anderson Cancer Center', desc:"Arun founded one of the largest cancer genetics programs in the world. Her research interests include breast cancer treatment, biological markers, chemoprevention, and breast cancer genetics. Dr. Arun currently serves on the National Comprehensive Cancer Network committee that makes national guidelines for breast cancer screening and management of high risk women.",img:'assets/doc2.png'}, 
  { id: 2, naming: 'José Baselga' , stat:'Physician-in-Chief', hosp:'Memorial Sloan Kettering Cancer Center', desc:'Baselga, who is also a professor of medicine at Weill Cornell Medical College, has been involved in the the development of targeted agents for the treatment of breast cancer for decades. He conducted pivotal laboratory and clinical studies that led to the approval of Herceptin, Perjeta, and Affinitor. He’s also focused on why tumors become resistant to these drugs, leading them to stop working.',img:'assets/doc1.png'}, 
  { id: 3, naming: 'Harold Burstein' , stat:'Institute Physician ',hosp:'Dana-Farber Cancer Institute',desc:'Burstein, also an associate professor of medicine at Harvard Medical School, focuses on novel treatments for early- and advanced-stage breast cancer, and studies of quality of life and health behavior among women with breast cancer. He serves on the National Comprehensive Cancer Network Breast Cancer Panel and the Oncology Drug Advisory Committee for the US Food and Drug Administration. Much of his work has related to new hormone-related treatments for breast cancer.',img:'assets/doc3.png'}, 
 ]; 
  
  } 
}


