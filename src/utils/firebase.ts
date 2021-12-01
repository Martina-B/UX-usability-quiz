import { initializeApp } from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut as authSignOut,
	onAuthStateChanged,
	User
} from 'firebase/auth';
import {
	collection,
	CollectionReference,
	doc,
	DocumentReference,
	getFirestore,
	Timestamp
} from 'firebase/firestore';

// Initialize Firebase
initializeApp({
	apiKey: 'AIzaSyAL_vgChUAl8GTGoA8ED4tGPEFk8OQ9Xnc',
	authDomain: 'ux-usability-quiz.firebaseapp.com',
	projectId: 'ux-usability-quiz',
	storageBucket: 'ux-usability-quiz.appspot.com',
	messagingSenderId: '444957790564',
	appId: '1:444957790564:web:45536bd265de113c4c6a71'
});

// Authentication
const auth = getAuth();

// Sign up handler
export const signUp = (email: string, password: string) =>
	createUserWithEmailAndPassword(auth, email, password);

// Sign in handler
export const signIn = (email: string, password: string) =>
	signInWithEmailAndPassword(auth, email, password);

// Sign out handler
export const signOut = () => authSignOut(auth);

// Subscribe to auth state changes
export const onAuthChanged = (callback: (u: User | null) => void) =>
	onAuthStateChanged(auth, callback);

// Firestore
const db = getFirestore();

export type Result = {
	by: string;
	mistakes: string[];
	incorrectChoosen: number;
	points: number;
	date: Timestamp;
};

export const resultsCollection = collection(
	db,
	'results'
) as CollectionReference<Result>;

export const resultDocument = (id: string) =>
	doc(db, 'results', id) as DocumentReference<Result>;
