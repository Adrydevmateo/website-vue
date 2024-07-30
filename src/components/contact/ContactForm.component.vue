<script setup lang="ts">
const handleSubmit = (e: Event) => {
  const form = e.target as HTMLFormElement
  const formData = new FormData(form)
  const honey = formData.get('_honey')

  if (honey) throw new Error('Bot detected!')

  const email = formData.get('email')
  const message = formData.get('message')

  form.reset()

  fetch('https://formsubmit.co/ajax/adrydevmateo@gmail.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      email,
      message
    })
  })
    .then(res => res.json())
    .then(data => console.log('Data: ', data))
    .catch(err => { throw new Error(err) })
}
</script>

<template>
  <form class="contact-form" netlify @submit.prevent="handleSubmit">
    <div class="contact-form__content">
      <input type="hidden" name="_captcha" value="false">
      <input type="text" name="_honey" style="display:none">
      <input type="email" name="email" id="contact__email" placeholder="Email" autocomplete="off">
      <textarea name="message" id="contact__message" placeholder="Message" rows="10" maxlength="750"></textarea>
    </div>
    <button class="submit__btn" type="submit">Send</button>
  </form>
</template>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
}

.contact-form__content {
  background-color: var(--color-accent-muted);
  display: grid;
  gap: 10px;
  margin-top: 40px;
}

#contact__email,
#contact__message,
#contact__email::placeholder,
#contact__message::placeholder,
.submit__btn {
  font-weight: var(--font-weight-extra-bold);
  color: var(--color-secondary-muted);
  transition: color var(--transition-primary);
}

#contact__email:focus,
#contact__message:focus,
#contact__email:focus::placeholder,
#contact__message:focus::placeholder {
  color: var(--color-secondary);
}

#contact__email,
#contact__message {
  border: none;
  outline: none;
  padding-inline: 16px;
  background-color: var(--color-primary);
  box-shadow: var(--box-shadow);
  min-width: 0;
}

#contact__email {
  max-width: 369px;
  height: 40px;
}

#contact__message {
  padding-block: 12px;
  resize: none;
}

.submit__btn {
  background-color: transparent;
  place-self: end;
  border: none;
  margin-top: 22px;
  padding: 10px 12px;
  cursor: pointer;
}

@media (hover:hover) {

  #contact__email:hover,
  #contact__message:hover,
  #contact__email:hover::placeholder,
  #contact__message:hover::placeholder,
  .submit__btn:hover {
    color: var(--color-secondary);
  }
}
</style>
