<!-- <script>
// @ts-nocheck
import { onMount } from 'svelte';

    onMount(() => {
        const fileInput = document.getElementById('fileInput');
        const uploadForm = document.getElementById('uploadForm');
        loopInLocalStorageMediaFiles();

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
            loopInLocalStorageMediaFiles();
        });
      }
    });

    function loopInLocalStorageMediaFiles(){
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const fileData = localStorage.getItem(key);
        let mediaElement;

        if (key.endsWith('.jpg') || key.endsWith('.png') || key.endsWith('.jpeg')) {
            mediaElement = document.createElement('img');
            mediaElement.src = fileData;
        } else if (key.endsWith('.mp4')) {
            mediaElement = document.createElement('video');
            mediaElement.src = fileData;
            mediaElement.controls = true;
        }
        uploadForm.appendChild(mediaElement);
      }
    }
</script>

<form id="uploadForm">
    <input type="file" id="fileInput" accept="image/*,video/*" multiple>
    <button type="submit">Upload</button>
</form> -->


<!-- <script>
// @ts-nocheck

    import { onMount } from 'svelte';

    onMount(() => {
        const fileInput = document.getElementById('fileInput');

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
    });
</script>
<form>
    <input type="file" id="fileInput" accept="image/*,video/*" multiple>
    <button type="submit">Upload</button>
</form> -->