import { STUDENTS_MOCKED } from "src/mocks/students.mock";
import { Student } from "src/models/student";
import { BehaviorSubject } from 'rxjs/index';

export class StudentService {
    
  private studentList: Student[] = STUDENTS_MOCKED;
  public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);

  constructor() {
  }
}