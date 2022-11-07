import { state } from "@angular/animations";
import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../action-types";
import { Course } from "../model/course";

export interface CoursesState extends EntityState<Course> {
  // old ways
  // courses: Course[];
  // entities: { [key: number]: Course };
  // ids: number[];
}

export const adapter = createEntityAdapter<Course>();

export const initialCoursesState = adapter.getInitialState();

export const coursesReducer = createReducer(
  initialCoursesState,
  on(CourseActions.allCoursesLoaded, (state, action) =>
    adapter.addAll(action.courses, state)
  )
);

export const {
  //
  selectAll,
} = adapter.getSelectors();
