<script lang="ts">
    import { firestore } from '$lib/firebase';
    import { collection, addDoc } from "firebase/firestore"; 

    const event = 5;

    const docRef = addDoc(collection(firestore, "events"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  }).then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  }).catch(function(error) {
    console.error("Error adding document: ", error);
  });
</script>