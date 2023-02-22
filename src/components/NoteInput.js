import React from 'react';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            title: '',
            createdAt: new Date().toISOString(),
            body: '',
            charsLeft: 50,
            charsMax: 50,
        }

        this.onTitleEventHandler = this.onTitleEventHandler.bind(this);
        this.onContentEventHandler = this.onContentEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    
    

    onTitleEventHandler(event) {
       const max = 50;
       const userInput = event.target.value.slice(0, max);
        
       const inputLength = userInput.length;
       
       this.setState(() => {
            return {
                title: userInput,
                charsLeft: max -inputLength,
            }
        });
        }

    onContentEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <div className='note-input'>
                <h2>Buat Catatan</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className='note-input__title__char-limit'>Sisa Karakter: {this.state.charsLeft}</p>
                    <input className='note-input__title' value={this.state.title} onChange={this.onTitleEventHandler} type='text' placeholder='Masukkan judul catatan....' required />
                    <textarea className='note-input__body' value={this.state.body} onChange={this.onContentEventHandler} type='text' placeholder='Tulis catatan...' required />
                    <button type='submit' className='note-submit__btn'><i class="fa-solid fa-file-circle-plus"></i> Buat Catatan</button>
                </form>
            </div>
        );
    }
}

export default NoteInput;