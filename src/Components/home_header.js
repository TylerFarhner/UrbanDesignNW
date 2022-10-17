import '../App.css'

function Header({ main_text, secondary_text, third_text, height }) {
    return (
        <div class="header-image">
            {/* TODO: need to upload image in public/images named header.jpg */}
            <img src="/images/header.jpg" alt="header image" />
            <div
                class="header-text"
                style={{
                    
                    width: 450,
                    border: '5px solid white',
                    borderRadius: '15px',
                }}
            >
                <div>
                    <h1 className='main-header-text'>{main_text}</h1>
                    <h3 className='header-text-2'>{secondary_text}</h3>
                    <p className='header-text-3'>{third_text}</p>
                </div>
            </div>
        </div>
    )
}

export default Header
