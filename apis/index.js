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
} from "firebase/firestore";
import { db } from "../Firebase";

export const getAllTasks = async () => {
  const docRef = collection(db, "Tasks");
  const foundPosts = [];
  const snapshot = await getDocs(docRef);
  snapshot.forEach((doc) => {
    foundPosts.push({ id: doc.id, data: doc.data() });
  });
  return foundPosts;
};

// export const getAllTasks = async () => {
//   const docRef = collection(db, "Tasks");
//   const snapshot = await getDocs(docRef);
//   snapshot.forEach((doc) => {
//     console.log(doc.id, "=>", doc.data());
//   });
// };

export const getAllPendingSocialMentions = async () => {
  const foundPosts = [];
  const taskRef = collection(db, "Tasks");
  const q = await query(
    taskRef,
    where("taskType", "==", "SocialMentions"),
    where("approved", "==", false)
  );
  const querySnapshot = await getDocs(q);
  // const snapshot = await getDocs(taskRef);
  querySnapshot.forEach((doc) => {
    foundPosts.push({ id: doc.id, data: doc.data() });
  });

  // snapshot.forEach((doc) => {
  //   foundPosts.push({ id: doc.id, data: doc.data() });
  // });
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
  // const snapshot = await getDocs(taskRef);
  querySnapshot.forEach((doc) => {
    foundPosts.push({ id: doc.id, data: doc.data() });
  });

  // snapshot.forEach((doc) => {
  //   foundPosts.push({ id: doc.id, data: doc.data() });
  // });
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
  // const snapshot = await getDocs(taskRef);
  querySnapshot.forEach((doc) => {
    foundPosts.push({ id: doc.id, data: doc.data() });
  });

  // snapshot.forEach((doc) => {
  //   foundPosts.push({ id: doc.id, data: doc.data() });
  // });
  return foundPosts;
};

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
    // foundUser.push({ id: doc.id, data: doc.data() });
    console.log({ id: doc.id, data: doc.data() });
  });
  // console.log(foundUser[0]);
  return foundUser[0];
};

// export async function getUserByEmail(email) {
//   // Make the initial query
//   const q = await query(
//     collection(db, "user"),
//     where("emailId", "==", email)
//   ).get();

//   if (!q.empty) {
//     const snapshot = q.docs[0];
//     const data = await snapshot.data();
//     console.log(data);
//     return data;
//   } else {
//     console.log("user not found by email");
//   }
// }

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
