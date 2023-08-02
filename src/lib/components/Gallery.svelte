<script>
// @ts-nocheck
import { onMount } from 'svelte';
    onMount(() => {
        const fileInput = document.getElementById('fileInput');
        const uploadForm = document.getElementById('uploadForm');
        const gallery = document.getElementById('gallery');
        if(fileInput){
            fileInput.addEventListener('change', (event) => {
            const files = event.target.files;

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const reader = new FileReader();
                reader.onloadend = () => {
                    localStorage.setItem(file.name, reader.result);
                };
                reader.readAsDataURL(file);
            }
        });
      }

    if(uploadForm){
        uploadForm.addEventListener('submit', (event) => {
            event.preventDefault();
            loopInLocalStorageMediaFiles(localStorage, gallery);
        });
      }
    loopInLocalStorageMediaFiles(localStorage, gallery);

    });

    function loopInLocalStorageMediaFiles(ls, gallery){
      for (let i = 0; i < ls.length; i++) {
        const key = ls.key(i);
        const fileData = ls.getItem(key);
        let mediaElement;

        if (key.endsWith('.jpg') || key.endsWith('.png') || key.endsWith('.jpeg')) {
            mediaElement = document.createElement('img');
            mediaElement.src = fileData;
            mediaElement.style.width = "33%";
        } else if (key.endsWith('.mp4')) {
            mediaElement = document.createElement('video');
            mediaElement.src = fileData;
            mediaElement.controls = true;
        }
        gallery.appendChild(mediaElement);
      }
    }
</script>

<form id="uploadForm">
    <input type="file" id="fileInput" accept="image/*,video/*" multiple>
    <button type="submit">Upload</button>
</form>
<div id="gallery" class="flex flex-wrap"></div>

<style>

</style>