import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";

import CourseReviewModal from "../components/core/ViewCourse/CourseReviewModal";
import VideoDetailsSidebar from "../components/core/ViewCourse/VideoDetailsSidebar";
import { getFullDetailsOfCourse } from "../services/operations/courseDetailsAPI";
import {
  setCompletedLectures,
  setCourseSectionData,
  setEntireCourseData,
  setTotalNoOfLectures,
} from "../slices/viewCourseSlice";

export default function ViewCourse() {
  const { courseId } = useParams();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [reviewModal, setReviewModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const data = await getFullDetailsOfCourse(courseId, token);
        // Store the course data once fetched
        setCourseData(data);
        // Dispatch actions with the fetched data
        if (data?.courseDetails) {
          dispatch(setCourseSectionData(data.courseDetails.courseContent));
          dispatch(setEntireCourseData(data.courseDetails));
          dispatch(setCompletedLectures(data.completedVideos));

          let lectures = 0;
          data?.courseDetails?.courseContent?.forEach((sec) => {
            lectures += sec.subSection?.length || 0; // Safely access subSection
          });
          dispatch(setTotalNoOfLectures(lectures));
        }
      } catch (error) {
        console.error("Error fetching course data:", error);
      } finally {
        setIsLoading(false); // Set loading to false once the data is fetched
      }
    };

    fetchCourseData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId, token]);

  if (isLoading) {
    return (
      <div className="spinner">
        Loading...
      </div> // Loading spinner while data is being fetched
    );
  }

  if (!courseData?.courseDetails) {
    return (
      <div className="error-message">
        Failed to load course details. Please try again later.
      </div> // Error message if course details are not found
    );
  }

  return (
    <>
      <div className="relative flex min-h-[calc(100vh-3.5rem)]">
        <VideoDetailsSidebar setReviewModal={setReviewModal} />
        <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
          <div className="mx-6">
            <Outlet />
          </div>
        </div>
      </div>
      {reviewModal && <CourseReviewModal setReviewModal={setReviewModal} />}
    </>
  );
}
