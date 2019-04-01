
function createStudent({ likesJavaScript = true, likesES2015 = true } = {}) {
  const studentLikesNothing = likesJavaScript === false && likesES2015 === false;
  if (studentLikesNothing) {
    return 'The student does not like much...';
  }

  const studentLikesBothTopic = likesJavaScript === true && likesES2015 === true;
  if (studentLikesBothTopic) {
    return 'The student likes JavaScript and ES2015';
  }

  if (likesJavaScript) {
    return 'The student likes JavaScript!';
  }
  return 'The student likes ES2015!';
}

export {
  createStudent,
};
