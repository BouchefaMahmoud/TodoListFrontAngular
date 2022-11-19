/* tslint:disable */
/* eslint-disable */
import { TaskItem } from './task-item';
export interface Todo {
  description?: null | string;
  id?: string;
  libelle?: null | string;
  tasks?: null | Array<TaskItem>;
}
