import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../shared/services/api/api.service";

// Register a sample datas for gender
//import genderData from "src/sample-datas/gender-data.json";

@Component({
  selector: "app-show-gender",
  templateUrl: "./show-gender.component.html",
  styleUrls: ["./show-gender.component.scss"],
})
export class ShowGenderComponent implements OnInit {
  constructor(private service: ApiService) {}
  GenderList: any = [];
  ModalTitle = "";
  ActivateAddEditGenderComp: boolean = false;
  gender: any;

  ngOnInit(): void {
    this.refreshGenderList();
  }
  //GenderList: Gender[] = genderData;

  addClick() {
    this.gender = {
      id: "0",
      gender: "",
      description: "",
    };
    this.ModalTitle = "Add Gender";
    this.ActivateAddEditGenderComp = true;
  }

  editClick(item: any) {
    this.gender = item;
    this.ModalTitle = "Edit Gender";
    this.ActivateAddEditGenderComp = true;
  }

  deleteClick(id: any) {
    if (confirm("Are you sure??")) {
      var val = {
        id: id,
      };
      this.service.deleteData(val).subscribe((res) => {
        alert("Deleted Successfully");
      });
    }
    
  }

  closeClick() {
    this.ActivateAddEditGenderComp = false;
    this.refreshGenderList();
  }

  refreshGenderList() {
    this.service.getAllData().subscribe((data) => {
      this.GenderList = data;
    });
  }
}
