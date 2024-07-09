export type TypeDoctor = {
  firstname: string;
  lastname: string;
  surname: string;
  img: string;
  path: string;
  listdoctorname: IDoctorName[];
  work: ITypeWork[];
  workhouse?: string;
  education: IEducation[];
  certificate: ICertificate;
  experience: number;
};

export interface IDoctorName {
  doctorname: string;
}

export interface ITypeWork {
  title: string;
  worklist: IWork[];
}

export interface IWork {
  workname: string;
}

export interface IEducation {
  univ: string;
  year: number;
  type: string;
}

export interface ICertificate {
  type: string;
  data: string;
  year: number;
}
