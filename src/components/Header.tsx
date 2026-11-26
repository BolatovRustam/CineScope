const HEAD = [
    { title: 'Главная' },
    { title: 'Фильмы' },
    { title: 'Сериалы' },
    { title: 'Избранное' },
]


export default function Header () {
    return (
        <>
            <header className="flex">
                <div className="flex">
                    { HEAD.map(obj => (
                        <div>
                            {obj.title}
                        </div>
                    ))}
                </div>
            </header>
        </>
    )
}
