import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: "app-mainpage",
  templateUrl: "./mainpage.component.html",
  styleUrls: ["./mainpage.component.css"]
})
export class MainpageComponent implements OnInit {
  data = [];

  formdata = {
    amount: "",
    description: ""
  };

  totalAmount = 0;

  invalid = false;

  constructor(private d: DataService,private loader: NgxUiLoaderService) {}

  ngOnInit() {
    this.funSelect();
  }
  funAdd() {
    if (this.formdata.amount === "" || this.formdata.description === "") {
      this.invalid = true;
    } else {
      const method = "/budget-insert";
      const that = this;
      this.loader.startBackground();
      this.d.funPostMethod(method, this.formdata)
      .then(() => {
        that.formdata = {
          amount: "",
          description: ""
        };
        that.funSelect();
        that.loader.stopBackground();
      });
    }
  }

  funSelect() {
    const method = "/budget-select";
    const that = this;
    this.loader.startBackground();
    this.d.funGetMethod(method)
    .then(data => {
      that.data = data["message"];
      that.loader.stopBackground();
    });
  }

  funDelete(x) {
    const method = "/budget-remove";
    const that = this;
    this.loader.startBackground();
    this.d.funPostMethod(method, { _id: x })
    .then(() => {
      that.funSelect();
      that.loader.stopBackground();
    });
  }

  funCalculate() {
    var amountData = [];
    for (var i = 0; i < this.data.length; i++) {
      amountData.push(parseInt(this.data[i].amount));
    }
    this.totalAmount = amountData.reduce((total, num) => {
      return total + num;
    });
  }
}
