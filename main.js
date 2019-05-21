const tree = document.querySelector('#tree'); // your code didn't work

function hideBranch(branch) {
  let branchArray = branch.parentNode.children;
    if (branchArray.length > 1) {
      for (let i = 0; i < branchArray.length; i++) {
        if (branchArray[i] !== branch) {
          branchArray[i].classList.toggle('hiddenBranch')
        }
      }
    }
}

tree.addEventListener('click', (e) => {
  let target = e.target;
  if (target.tagName === 'SPAN') {
    hideBranch(target);
  }
})
