export default {
    install(app) {
        console.log("directive:input-number-append")
        this.setupPreventRepeatedClicks(app);
    },
    setupPreventRepeatedClicks(app) {
        let that = this;
        app.directive('input-number-append', {
            beforeUpdate(el, binding) {
                let append = that.getFirstElementsByClass(el, "input-number-append_span")
                if (!append) {
                    append = document.createElement('div')
                    el.append(append)
                    append.style.position = 'absolute';
                    append.className = 'input-number-append_span';
                    append.style.top = '1px';
                    append.style.right = '40px';
                    append.style.bottom = '1px';
                    append.style.color = '#999';
                    append.style.width = '40px';
                    if (that.existsClassName(el, "el-input--large")) {
                        append.style.lineHeight = '40px';
                    } else if (that.existsClassName(el, "el-input--default")) {
                        append.style.lineHeight = '30px';
                    }else if (that.existsClassName(el, "el-input--small")) {
                        append.style.lineHeight = '20px';
                    }
                    //append.style.height = '32px';
                    //append.style.backgroundColor = '#f5f7fa';
                    if (binding.value) {
                        append.innerText = '/ ' + binding.value
                    } else {
                        append.innerText = '/ 0'
                    }
                    let input = that.getFirstElementsByClass(el, "el-input")
                    let wrapper = that.getFirstElementsByClass(input, "el-input__wrapper")
                    if (wrapper) {
                        wrapper.style.paddingRight = "72px";
                    }
                } else {
                    if (binding.value) {
                        append.innerText = '/ ' + binding.value
                    } else {
                        append.innerText = '/ 0'
                    }
                }
            }
        })
    },
    existsClassName(root, className) {
        let cn = root.className;
        let cnArray = cn.split(" ");
        if (cnArray.findIndex(item => item == className) > -1) {
            return true;
        }
        return false;
    },
    getFirstElementsByClass(root, className) {
        if (root) {
            let els = root.children; // use "*" for all elements
            let elsLen = els.length;
            for (let i = 0; i < elsLen; i++) {
                if (this.existsClassName(els[i], className)) {
                    return els[i];
                }
            }
        }
        return null;
    }
}