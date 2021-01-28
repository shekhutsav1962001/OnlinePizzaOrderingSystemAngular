import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public temp:any;
  public avail:boolean = false;
  public msg:string="";
  public temporder:any;
  private baseUri: string = "http://localhost:3000/admin";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  check() {
    return this.http.get(this.baseUri + "/check", { headers: this.headers });
  }

  getAllUser() {
    return this.http.get(this.baseUri + "/getalluser", { headers: this.headers });
  }

  blockuser(id)
  {
    return this.http.delete(this.baseUri + "/blockuser/"+id, { headers: this.headers });
  }
  unblockuser(id)
  {
    return this.http.delete(this.baseUri + "/unblockuser/"+id, { headers: this.headers });
  }

  deleteuser(id)
  {
    return this.http.delete(this.baseUri + "/deleteuser/"+id, { headers: this.headers });
  }

  getAllPizza() {
    return this.http.get(this.baseUri + "/getallpizza", { headers: this.headers });
  }

  deletepizza(id)
  {
    return this.http.delete(this.baseUri + "/deletepizza/"+id, { headers: this.headers });
  }

  getAllFeedback() {
    return this.http.get(this.baseUri + "/getallfeedbback", { headers: this.headers });
  }

  deletefeedback(id)
  {
    return this.http.delete(this.baseUri + "/deletefeedback/"+id, { headers: this.headers });
  }

  getorder()
  {
    return this.http.get(this.baseUri + "/getallorder", { headers: this.headers });
  }



  deleteorder(id)
  {
    return this.http.delete(this.baseUri + "/deleteorder/"+id, { headers: this.headers });
  }

  setOrder(id)
  {
    this.temporder=id
  }

  getoneOrder()
  {
    return this.temporder;
  }


  getOneCartItem(id)
  {
    return this.http.delete(this.baseUri + "/getonecartitem/"+id, { headers: this.headers });
  }

  getOneCartItemUser(id)
  {
    return this.http.delete(this.baseUri + "/getonecartitemuser/"+id, { headers: this.headers });
  }

}
