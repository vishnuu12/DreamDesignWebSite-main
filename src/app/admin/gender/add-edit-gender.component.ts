import { Component, Input, OnInit } from "@angular/core";
import { ApiService } from "../../shared/services/api/api.service";

@Component({
  selector: "app-add-edit-gender",
  templateUrl: "./add-edit-gender.component.html",
  styleUrls: ["./add-edit-gender.component.scss"],
})
export class AddEditGenderComponent implements OnInit {
  constructor(private service: ApiService) {}
  @Input() gen: any;
  id = "";
  gender = "";
  description = "";
  GenderList: any = [];

  ngOnInit(): void {
    this.loadGenderList();
  }

  loadGenderList() {
    this.service.getAllData().subscribe((data: any) => {
      this.GenderList = data;

      this.id = this.gen.id;
      this.gender = this.gen.gender;
      this.description = this.gen.description;
    });
  }

  setGender() {
    var val = {
      id: this.id,
      gender: this.gender,
      description: this.description,
    };
    if(val.id=="0"){
      this.service.setData(val).subscribe((res) => {
        alert("Added Successfully");
        this.loadGenderList();
      });
    }
    else if(val.id!="0"){
      this.service.upDateData(val).subscribe((res) => {
        alert("Updated Successfully");
        this.loadGenderList();
      });
    }
  }

  deleteGender() {
    var val = {
      id: this.id,
    };
    this.service.deleteData(val).subscribe((res) => {
      alert("Updated Successfully");
      this.loadGenderList();
    });
  }
}
