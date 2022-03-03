import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  query,
  where,
  updateDoc,
  increment,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../Firebase";

export const addTask = async (data) => {
  const docRef = collection(db, "Tasks");
  const res = await addDoc(docRef, data);
  return res;
};

export const login = async (email) => {
  const foundUser = [];
  const userRef = await collection(db, "user");
  const q = await query(userRef, where("emailId", "==", email));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log({ id: doc.id, data: doc.data() });
  });
  return foundUser[0];
};

export const approvePost = async (taskId, userId, points) => {
  const userRef = doc(db, "user", userId);
  const taskRef = doc(db, "Tasks", taskId);
  await updateDoc(userRef, {
    totalPoints: increment(points),
  });
  await updateDoc(taskRef, {
    approved: true,
    points: points,
  });
};
export const getAllTasks = async () => {
  const docRef = collection(db, "Tasks");
  const foundPosts = [];
  const snapshot = await getDocs(docRef);
  snapshot.forEach((doc) => {
    foundPosts.push({ id: doc.id, data: doc.data() });
  });
  return foundPosts;
};

export const getAllPendingSocialMentions = async () => {
  const foundPosts = [];
  const taskRef = collection(db, "Tasks");
  const q = await query(
    taskRef,
    where("taskType", "==", "SocialMentions"),
    where("approved", "==", false)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    foundPosts.push({ id: doc.id, data: doc.data() });
  });

  return foundPosts;
};
export const getAllPendingBlog = async () => {
  const foundPosts = [];
  const taskRef = collection(db, "Tasks");
  const q = await query(
    taskRef,
    where("taskType", "==", "Blog"),
    where("approved", "==", false)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    foundPosts.push({ id: doc.id, data: doc.data() });
  });

  return foundPosts;
};
export const getAllPendingProject = async () => {
  const foundPosts = [];
  const taskRef = collection(db, "Tasks");
  const q = await query(
    taskRef,
    where("taskType", "==", "Project"),
    where("approved", "==", false)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    foundPosts.push({ id: doc.id, data: doc.data() });
  });

  return foundPosts;
};

export const getUserActivity = async (userId) => {
  const foundPosts = [];
  const taskRef = collection(db, "Tasks");
  const q = await query(
    taskRef,
    where("creatorId", "==", userId),
    orderBy("timestamp", "desc")
    // where("approved", "==", true)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    foundPosts.push({ id: doc.id, data: doc.data() });
  });

  return foundPosts;
};

export const getGlobalActivity = async () => {
  const foundPosts = [];
  const taskRef = collection(db, "Tasks");
  const q = await query(
    taskRef,
    orderBy("timestamp", "desc")
    // where("approved", "==", true)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    foundPosts.push({ id: doc.id, data: doc.data() });
  });

  return foundPosts;
};
