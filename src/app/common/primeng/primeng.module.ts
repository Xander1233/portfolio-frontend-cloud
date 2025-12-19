import { NgModule } from "@angular/core";
import { Card, CardModule } from "primeng/card";
import { Menubar } from "primeng/menubar";
import { Tag, TagModule } from "primeng/tag";
import { ToastModule } from "primeng/toast";
import { Skeleton } from "primeng/skeleton";
import { Image, ImageModule } from "primeng/image";
import { Avatar, AvatarModule } from "primeng/avatar";
import { Table, TableModule } from "primeng/table";
import { InputText, InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { FileUploadModule } from "primeng/fileupload";
import { DialogModule } from "primeng/dialog";
import { FloatLabelModule } from "primeng/floatlabel";

const components = [
	Card,
	Tag,
	Menubar,
	Skeleton,
	Image,
	Avatar,
	TableModule,
	InputTextModule,
	FormsModule,
	ButtonModule,
	FileUploadModule,
	DialogModule,
	FloatLabelModule,
]

@NgModule({
	exports: components,
	imports: components
})
export class PrimeNGModule { }